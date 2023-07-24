import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, Alert } from '@edx/paragon';
import { Info } from '@edx/paragon/icons';
import ExamStateContext from '../../context';
import { transTime } from '../transTime';

const StartTimedExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { exam, startTimedExam } = state;
  const examDuration = transTime(exam.total_time);

  return (
    <>
      <div className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.startExamInstructions.title"
          defaultMessage="Subsection is a Timed Exam ({examDuration})"
          values={{ examDuration }}
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.startExamInstructions.text1"
          defaultMessage="This exam has a time limit associated with it. "
        />
        <strong>
          <FormattedMessage
            id="exam.startExamInstructions.text2"
            defaultMessage="To pass this exam, you must complete the problems in the time allowed. "
          />
        </strong>
        <FormattedMessage
          id="exam.startExamInstructions.text3"
          defaultMessage={'After you select "I am ready to start this timed exam", '
          + 'you will have {examDuration} to complete and submit the exam.'}
          values={{ examDuration }}
        />
      </p>
      <Alert variant="danger" dismissible icon={Info}>
        <Alert.Heading>
          <FormattedMessage
              id="exam.startExamInstructions.attention"
              defaultMessage="Attention!"
            />
          </Alert.Heading>
        <p>
        <FormattedMessage
              id="exam.startExamInstructions.text4"
              defaultMessage="You must click the 'Submit' button for each question or group of questions to be scored. Clicking the Save button does NOT count as having submitted an answer."
            />
        </p>
      </Alert>
      <Button
        data-testid="start-exam-button"
        variant="outline-primary"
        onClick={startTimedExam}
      >
        <FormattedMessage
          id="exam.startExamInstructions.startExamButtonText"
          defaultMessage="I am ready to start this timed exam."
        />
      </Button>
    </>
  );
};

export default StartTimedExamInstructions;
