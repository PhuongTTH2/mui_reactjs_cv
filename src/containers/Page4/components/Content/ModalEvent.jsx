import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { isEmpty } from "lodash";

const ModalEvent = ({ modalEvent, handleCloseModal, handleModalSave }) => {

  const arrayNameNumber = ["First", "Second", "Third", "Fourth", "Fifth"];

  const defaulArrayDayEvent = {
    date_time: new Date().getTime(),
    location: "",
  };
  const defaultValuesEvent = {
    name: "",
    desc: "",
    date_time_locations: [defaulArrayDayEvent],
    is_rsvp: "",
  };
  const schemaEvent = yup.object().shape({
    name: yup
      .string()
      .required("Name of Event is required")
      .max(40)
      .label("Name of Event"),
    desc: yup
      .string()
      .required("Brief Description is required")
      .max(40)
      .label("Brief"),
    date_time_locations: yup.array().of(
      yup.object().shape({
        location: yup
          .string()
          .max(40)
          .required("Location is required")
          .label("Location"),
      })
    ),
  });

  const [errorValidatEvent, setErrorValidateEvent] =
    useState(defaultValuesEvent);
  const formEvent = useForm({
    defaultValues: defaultValuesEvent,
    resolver: yupResolver(schemaEvent),
  });
  useEffect(() => {
    if (formEvent.formState.errors) {
      setErrorValidateEvent(formEvent.formState.errors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formEvent.formState.errors]);
  const [arrayDayEvent, setArrayDayEvent] = useState([defaulArrayDayEvent]);
  const [radioEvent, setRadioEvent] = useState(true);

  const handleCloseModalEvent = () => {
    setErrorValidateEvent(defaultValuesEvent);
    setArrayDayEvent([defaulArrayDayEvent]);
    formEvent.unregister("date_time_locations");
    formEvent.setValue("name", "");
    formEvent.setValue("desc", "");
    formEvent.setValue("date_time_locations", [defaulArrayDayEvent]);
    setRadioEvent(true);
    handleCloseModal();
  };

  const handleAddRowEvent = () => {
    if (arrayDayEvent.length < 5) {
      setArrayDayEvent([...arrayDayEvent, defaulArrayDayEvent]);
      formEvent.setValue(
        `date_time_locations.${arrayDayEvent.length}`,
        defaulArrayDayEvent
      );
    }
  };

  const handleRemoveRowEvent = (index) => {
    let newArrayDayEvent = arrayDayEvent.filter((value, i) => i !== index);
    setArrayDayEvent(newArrayDayEvent);
    let newFormEvent = formEvent
      .getValues("date_time_locations")
      .filter((value, i) => i !== index);
    formEvent.setValue("date_time_locations", newFormEvent);
  };

  const handleDuplicateRowEvent = (index) => {
    if (arrayDayEvent.length < 5) {
      let newArrayDayEvent = [];
      newArrayDayEvent.push({
        date_time: arrayDayEvent[0].date_time,
        location: arrayDayEvent[0].location,
      });
      for (let i = 0; i < arrayDayEvent.length; i++) {
        newArrayDayEvent.push({
          date_time: arrayDayEvent[i].date_time,
          location: arrayDayEvent[i].location,
        });
      }
      formEvent.unregister("date_time_locations");
      for (let i = 0; i < newArrayDayEvent.length; i++) {
        let dateGetTime = new Date(newArrayDayEvent[i].date_time).getTime();
        formEvent.setValue(`date_time_locations.${i}.date_time`, dateGetTime);
        formEvent.setValue(
          `date_time_locations.${i}.location`,
          newArrayDayEvent[i].location
        );
      }
      setArrayDayEvent(newArrayDayEvent);
    }
  };

  const handleChangeDatTimeEvent = (date, index) => {
    let newArrayDayEvent = [...arrayDayEvent];
    newArrayDayEvent[index].date_time = date;
    setArrayDayEvent(newArrayDayEvent);
    let dateGetTime = new Date(date).getTime();
    formEvent.setValue(`date_time_locations.${index}.date_time`, dateGetTime);
  };

  const handleChangeLocationEvent = (e, index) => {
    let newArrayDayEvent = [...arrayDayEvent];
    newArrayDayEvent[index].location = e.target.value;
    setArrayDayEvent(newArrayDayEvent);
    formEvent.setValue(`date_time_locations.${index}.location`, e.target.value);
  };

  const handleSubmitEvent = async (inputs) => {

  };

  return (
    <Modal show={modalEvent} onHide={handleCloseModalEvent} size="lg" className="ModelLounge">
      <Modal.Header closeButton>
        <div className="card-header text-center">
          <span>Event</span>
        </div>
      </Modal.Header>
      {/* Modal content*/}
      <Modal.Body>
        <div className="create-cont">
          <div className="create-inner">
            <div className="row">
              <div className="col-md-3">
                <label>
                  Name of Event <span className="color-red"> *</span>
                </label>
              </div>
              <div className="col-md-9 modal-input">
                <input
                  style={{
                    border: isEmpty(errorValidatEvent?.name) ? '' : 'solid 1px #ff0000',
                  }}
                  type="text"
                  placeholder="Enter Name of Event"
                  name="name"
                  {...formEvent.register('name')}
                  onChange={(e) => formEvent.setValue('name', e.target.value)}
                />
                {errorValidatEvent.name && <span className="error-login">{errorValidatEvent.name.message}</span>}
              </div>
            </div>
          </div>
          <div className="create-inner">
            <div className="row">
              <div className="col-md-3">
                <label>
                  Brief Description <span className="color-red"> *</span>
                </label>
              </div>
              <div className="col-md-9 modal-input">
                <input
                  style={{
                    border: isEmpty(errorValidatEvent?.desc) ? '' : 'solid 1px #ff0000',
                  }}
                  type="text"
                  placeholder="Enter Brief Description"
                  name="description"
                  {...formEvent.register('desc')}
                  onChange={(e) => formEvent.setValue('desc', e.target.value)}
                />
                {errorValidatEvent.desc && <span className="error-login">{errorValidatEvent.desc.message}</span>}
              </div>
            </div>
          </div>
          <div className="create-inner pt--20">
            <p className="fs--12">
              Date / Time / Location <span className="color-red"> *</span>
            </p>
          </div>
          {arrayDayEvent.map((value, index) => (
            <div className=" create-inner-event create-inner iconAfter">
              <div className="row">
                <div className="col-md-2">
                  <label>
                    {arrayNameNumber[index]} Day <span className="color-red"> *</span>
                  </label>
                </div>
                <div className="col-md-3 date-picker-event">
                  <div className="datePickerEvent">
                    <DatePicker
                      minDate={new Date()}
                      selected={arrayDayEvent[index].date_time}
                      dateFormat="MM/dd/yyyy h:mm aa"
                      showTimeSelect
                      height={200}
                      onChange={(date) => handleChangeDatTimeEvent(date, index)}
                    />
                  </div>
                </div>
                <div
                  className="col-md-6"
                  style={{
                    display: 'flex',
                  }}
                >
                  <input
                    style={{
                      border: isEmpty(errorValidatEvent?.date_time_locations)
                        ? ''
                        : errorValidatEvent?.date_time_locations[index]?.location
                        ? 'solid 1px #ff0000'
                        : '',
                    }}
                    type="text"
                    name="description"
                    placeholder="Street Address City/ State/ Zip or Virtual Event Link *"
                    value={arrayDayEvent[index].location}
                    onChange={(e) => handleChangeLocationEvent(e, index)}
                  />
                  {index === 0 ? (
                    <div
                      className=""
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '5px',
                      }}
                    >
                      <span class="pointerA" onClick={() => handleDuplicateRowEvent(index)}>
                        <img
                          alt="alt"
                          style={{
                            width: '39px',
                            height: '35px',
                          }}
                          src="/assets/images/news/duplicate-icon.png"
                        />
                      </span>
                    </div>
                  ) : (
                    <div
                      className=""
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '10px',
                      }}
                    >
                      <span class="pointerA" onClick={() => handleRemoveRowEvent(index)}>
                        <img
                          alt="alt"
                          style={{
                            width: '24px',
                            height: '24px',
                            marginLeft: '10px',
                          }}
                          src="/assets/images/news/wrong-red-icon.png"
                        />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {arrayDayEvent.length !== 5 ? (
            <div className="create-inner addButton pb--20">
              <span class="pointerA" onClick={() => handleAddRowEvent()}>
                <img src="/assets/images/news/icon-add.png" alt="" />
                <span className="text--gray"> Add another day/time/location</span>
              </span>
            </div>
          ) : (
            ''
          )}
          <div className="create-inner pb--20">
            <label>
              {' '}
              Allow RSVPs? &nbsp;&nbsp;
              <input type="radio" name="rsvpChoice" checked={radioEvent} onClick={() => setRadioEvent(true)} />
              &nbsp;Yes &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" name="rsvpChoice" checked={!radioEvent} onClick={() => setRadioEvent(false)} />
              &nbsp;No
            </label>
          </div>
          <div className="create-inner f--width"></div>

          <div className="f--width text-center">
            <button
              type="button"
              onClick={formEvent.handleSubmit(handleSubmitEvent)}
              className="btn bg--defaultBlue text-white padding--lr40"
              disabled={formEvent.formState.isSubmitting}
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
            onClick={formEvent.handleSubmit(handleSubmitEvent)}
            disabled={formEvent.formState.isSubmitting}
            style={{ marginTop: '20px' }}
          >
            POST
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
};

export default ModalEvent;
