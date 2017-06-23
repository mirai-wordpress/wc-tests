import React from 'react';
import bootstrapStyles from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
// I18n calendar
// @todo: We need to make this require based on a variable.
// @todo: Translate startDatePlaceholderText / endDatePlaceholderText
var ru = require('moment/locale/ru');
import { DateRangePicker, DateRangePickerPhrases, isInclusivelyAfterDay, START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from 'react-dates';
import omit from 'lodash/omit';
import reactDatesStyles from '../../node_modules/react-dates/lib/css/_datepicker.css';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
// import {} from 'react-bootstrap';

/*function isInclusivelyAfterDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return !isBeforeDay(a, b);
}*/

const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj
};

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  // calendar presentation and interaction related props
  renderMonth: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // day presentation and interaction related props
  renderDay: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,
};

class DatePicker extends React.Component {
        constructor(props){
            super(props);

			let focusedInput = null;
		    if (props.autoFocus) {
		      focusedInput = START_DATE;
		    } else if (props.autoFocusEndDate) {
		      focusedInput = END_DATE;
		    }

			this.state = {
		      focusedInput,
		      startDate: props.initialStartDate,
		      endDate: props.initialEndDate,
		    };

		    this.onDatesChange = this.onDatesChange.bind(this);
		    this.onFocusChange = this.onFocusChange.bind(this);
        }

		  onDatesChange({ startDate, endDate }) {
		    this.setState({ startDate, endDate });
		  }

		  onFocusChange(focusedInput) {
		    this.setState({ focusedInput });
		  }

        render(){

			const { focusedInput, startDate, endDate } = this.state;

			// autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
		    // example wrapper but are not props on the SingleDatePicker itself and
		    // thus, have to be omitted.
		    const props = omit(this.props, [
		      'autoFocus',
		      'autoFocusEndDate',
		      'initialStartDate',
		      'initialEndDate',
		    ]);

            return(
                <div className={bootstrapStyles.container}>
					<h1>Holaaaaaaaaaaaa</h1>
					<DateRangePicker
				      {...props}
			          onDatesChange={this.onDatesChange}
			          onFocusChange={this.onFocusChange}
			          focusedInput={focusedInput}
			          startDate={startDate}
			          endDate={endDate}
			        />
				<p>dsoinvdsoi vnoisd vsdnoivn sdoivn sdoivn sdoivn sdoivnsdoivn sdoivn sdoivn sdoin vsdiovn sdoivn dsoinvdsoi vnoisd vsdnoivn sdoivn sdoivn sdoivn sdoivnsdoivn sdoivn sdoivn sdoin vsdiovn sdoivndsoinvdsoi vnoisd vsdnoivn sdoivn sdoivn sdoivn sdoivnsdoivn sdoivn sdoivn sdoin vsdiovn sdoivndsoinvdsoi vnoisd vsdnoivn sdoivn sdoivn sdoivn sdoivnsdoivn sdoivn sdoivn sdoin vsdiovn sdoivndsoinvdsoi vnoisd vsdnoivn sdoivn sdoivn sdoivn sdoivnsdoivn sdoivn sdoivn sdoin vsdiovn sdoivndsoinvdsoi vnoisd vsdnoivn sdoivn sdoivn sdoivn sdoivnsdoivn sdoivn sdoivn sdoin vsdiovn sdoivndsoinvdsoi vnoisd vsdnoivn sdoivn sdoivn sdoivn sdoivnsdoivn sdoivn sdoivn sdoin vsdiovn sdoivn</p>
                </div>
            )
        }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
