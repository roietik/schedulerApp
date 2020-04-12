import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  DateNavigator,
  Toolbar,
  Appointments,
  AppointmentTooltip,
  EditRecurrenceMenu,
  DragDropProvider,
  TodayButton,
  AppointmentForm,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from 'store/monthAppointments';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { jsonDateParser } from 'json-date-parser';

const green = {
  50: '#8ACE76',
  100: '#8ACE76',
  200: '#8ACE76',
  300: '#8ACE76',
  400: '#8ACE76',
  500: '#8ACE76',
  600: '#8ACE76',
  700: '#8ACE76',
  800: '#8ACE76',
  900: '#8ACE76',
  A100: '#8ACE76',
  A200: '#8ACE76',
  A400: '#8ACE76',
  A700: '#8ACE76',
};

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: green,
  },
});

const messages = {
  moreInformationLabel: '',
};

const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'multilineTextEditor') {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const onPriceChange = (nextValue) => {
    onFieldChange({ payment: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Payment" type="title" />
      <AppointmentForm.TextEditor
        value={appointmentData.payment}
        onValueChange={onPriceChange}
        placeholder="Payment"
      />
    </AppointmentForm.BasicLayout>
  );
};

const AppointmentTitle = styled.h5`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppointmentContent = ({ data }) => {
  const { title, payment } = data;
  // console.log(data);

  return (
    <AppointmentTitle>
      {title}: {payment} PLN
    </AppointmentTitle>
  );
};

class SchedulerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: new Date(),
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('scheduler-unique')) {
      this.setState({ data: JSON.parse(localStorage.getItem('scheduler-unique'), jsonDateParser) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { data } = this.state;
    if (prevState.data !== data) {
      localStorage.setItem('scheduler-unique', JSON.stringify(data));
    }
  }

  changeAddedAppointment = (addedAppointment) => {
    this.setState({ addedAppointment });
    console.log('addedAppointment', addedAppointment);
  };

  changeAppointmentChanges = (appointmentChanges) => {
    this.setState({ appointmentChanges });
    console.log('appointmentChanges', appointmentChanges);
  };

  changeEditingAppointmentId = (editingAppointmentId) => {
    this.setState({ editingAppointmentId });
    console.log('editingAppointmentId', editingAppointmentId);
  };

  commitChanges = ({ added, changed, deleted }) => {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment,
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  };

  render() {
    const {
      data,
      currentDate,
      addedAppointment,
      appointmentChanges,
      editingAppointmentId,
    } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Scheduler data={data}>
            <ViewState defaultCurrentDate={currentDate} />
            <EditingState
              onCommitChanges={this.commitChanges}
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={this.changeAddedAppointment}
              appointmentChanges={appointmentChanges}
              onAppointmentChangesChange={this.changeAppointmentChanges}
              editingAppointmentId={editingAppointmentId}
              onEditingAppointmentIdChange={this.changeEditingAppointmentId}
            />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments appointmentContentComponent={AppointmentContent} />
            <EditRecurrenceMenu />
            <ConfirmationDialog />
            <AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
            <AppointmentForm
              basicLayoutComponent={BasicLayout}
              textEditorComponent={TextEditor}
              messages={messages}
            />
            <DragDropProvider />
          </Scheduler>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

// SchedulerPage.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//       category: PropTypes.string,
//       limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//     }),
//   ).isRequired,
// };

export default SchedulerPage;

// przebudować reduxa albo skasować
// zrobić 3 kurs reacta
