import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { isEmpty } from 'lodash'

const ModalPoll = ({ modalPoll, handleCloseModal, handleModalSave }) => {
  const [closePoll, setClosePoll] = useState(null)
  const [radioPoll, setRadioPoll] = useState(true)
  const [checkBoxPoll, setCheckBoxPoll] = useState(false)
  const schemaPoll = yup.object().shape({
    desc: yup.string().max(300).label('Desc'),
    question: yup.string().required('Question is required').max(100).label('Question'),
    answers: yup.array().of(
      yup.object().shape({
        answers: yup.string().required('Answers is required').max(100).label('Answers'),
      })
    ),
  })
  const defaulArrayPoll = {
    answers: '',
    vote: 0,
  }
  const defaultValuesPoll = {
    desc: '',
    question: '',
    answers: [defaulArrayPoll, defaulArrayPoll],
    close_at: '',
    show_when_voting: false,
  }
  const [arrayPollAnswerChoice, setArrayPollAnswerChoice] = useState([defaulArrayPoll, defaulArrayPoll])
  const [errorValidatePoll, setErrorValidatePoll] = useState(defaultValuesPoll)
  const formPoll = useForm({
    defaultValues: defaultValuesPoll,
    resolver: yupResolver(schemaPoll),
  })

  useEffect(() => {
    if (formPoll.formState.errors) {
      setErrorValidatePoll(formPoll.formState.errors)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formPoll.formState.errors])

  const handleCloseModalPoll = () => {
    setErrorValidatePoll(defaultValuesPoll)
    setArrayPollAnswerChoice([defaulArrayPoll, defaulArrayPoll])
    formPoll.unregister('answers')
    formPoll.setValue('desc', '')
    formPoll.setValue('question', '')
    formPoll.setValue('close_at', '')
    formPoll.setValue('answers', [defaulArrayPoll, defaulArrayPoll])
    setClosePoll(null)
    setRadioPoll(true)
    setCheckBoxPoll(false)

    handleCloseModal()
  }

  const handleAddRowPoll = () => {
    if (arrayPollAnswerChoice.length < 5) {
      setArrayPollAnswerChoice([...arrayPollAnswerChoice, defaulArrayPoll])
      formPoll.setValue(`answers.${arrayPollAnswerChoice.length}`, defaulArrayPoll)
    }
  }

  const handleRemoveRowPoll = (index) => {
    let newArrayPollAnswerChoice = arrayPollAnswerChoice.filter((value, i) => i !== index)
    setArrayPollAnswerChoice(newArrayPollAnswerChoice)
    let newFormPoll = formPoll.getValues('answers').filter((value, i) => i !== index)
    formPoll.setValue('answers', newFormPoll)
  }

  const handleCheckBoxPoll = () => {
    setCheckBoxPoll(!checkBoxPoll)
    formPoll.setValue('show_when_voting', !checkBoxPoll)
  }

  const handleClickPollTime = (date) => {
    setRadioPoll(false)
    setClosePoll(date)
  }

  const handleRadioPoll = () => {
    setClosePoll(null)
    setRadioPoll(true)
  }

  const handleSubmitPoll = async (inputs) => {}

  return (
    <Modal show={modalPoll} onHide={handleCloseModalPoll} size="lg">
      <Modal.Header closeButton>
        <div className="card-header text-center">
          <span>Poll</span>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p>Introduction</p>
        <div className="create-cont">
          <div className="create-inner">
            <textarea
              style={{
                border: isEmpty(errorValidatePoll?.desc) ? '' : 'solid 1px #ff0000',
              }}
              type="text"
              placeholder="Describe the main purpose of the poll in 300 characters or less."
              name="desc"
              {...formPoll.register('desc')}
              onChange={(e) => formPoll.setValue('desc', e.target.value)}
            />
            {errorValidatePoll.desc && <span className="error-login">{errorValidatePoll.desc.message}</span>}
          </div>
          <div className="col-md-9 modal-input" style={{marginTop: '10px'}}>
            <input
              style={{
                border: isEmpty(errorValidatePoll?.question) ? '' : 'solid 1px #ff0000',
              }}
              type="text"
              placeholder="Question *"
              {...formPoll.register(`question`)}
              onChange={(e) => formPoll.setValue('question', e.target.value)}
            />
            {errorValidatePoll.question && <span className="error-login">{errorValidatePoll.question.message}</span>}
          </div>
          {arrayPollAnswerChoice.map((value, index) => (
            <div
              className="modal-input-event"
              style={{
                display: 'flex',
                width: 'inherit',
              }}
            >
              <div className="col-md-9">
                <input
                  style={{
                    border: isEmpty(errorValidatePoll?.answers)
                      ? ''
                      : errorValidatePoll?.answers[index]?.answers
                      ? 'solid 1px #ff0000'
                      : '',
                  }}
                  type="text"
                  className="create-inner-poll"
                  {...formPoll.register(`answers.${index}.answers`)}
                  onChange={(e) => formPoll.setValue(`answers.${index}.answers`, e.target.value)}
                  placeholder={`Answer Choice ${index + 1}*`}
                />
              </div>
              {index <= 1 ? (
                ''
              ) : (
                <div
                  className="col-md-3"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '2px',
                  }}
                >
                  <span class="pointerA" onClick={() => handleRemoveRowPoll(index)}>
                    <img
                      alt="alt"
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      src="/assets/images/news/wrong-red-icon.png"
                    />
                  </span>
                </div>
              )}
            </div>
          ))}
          {arrayPollAnswerChoice.length !== 5 ? (
            <div className="create-inner add-button">
              <span class="pointerA" onClick={() => handleAddRowPoll()}>
                <img src="/assets/images/news/icon-add.png" alt="" /> Add another answer choice
              </span>
            </div>
          ) : (
            ''
          )}
          <div className="create-inner ">
            <div
              className=""
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '10px 0',
              }}
            >
              <span>Close Poll:</span>
              <div
                style={{
                  margin: '0 5px',
                }}
              >
                <DatePicker
                  minDate={new Date()}
                  selected={closePoll}
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeSelect
                  placeholderText="mm/dd/yyyy 00:00 AM"
                  onChange={(date) => handleClickPollTime(date)}
                />
              </div>
              <span>Or</span>
              <div
                className="text-center"
                style={{
                  margin: '0 5px',
                }}
              >
                <input type="radio" checked={radioPoll} onClick={() => handleRadioPoll()} />
              </div>
              <span>Manually</span>
            </div>
          </div>
          <div className="create-inner pb--20">
            <label>
              <input type="checkbox" checked={checkBoxPoll} onClick={() => handleCheckBoxPoll()} /> Show results while
              poll is in process
            </label>
          </div>
          <div className="create-inner f--width"></div>
          <div className="clearfix" />
          <div className="f--width text-center">
            <button
              type="button"
              onClick={formPoll.handleSubmit(handleSubmitPoll)}
              className="btn bg--defaultBlue text-white padding--lr40"
              disabled={formPoll.formState.isSubmitting}
              style={{ marginTop: '20px' }}
            >
              POST
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="button-submit">
          <button
            type="button"
            onClick={formPoll.handleSubmit(handleSubmitPoll)}
            disabled={formPoll.formState.isSubmitting}
            style={{ marginTop: '20px' }}
          >
            POST
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalPoll
