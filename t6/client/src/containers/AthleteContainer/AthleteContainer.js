import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import {
  Formik, Form,
} from 'formik';
import {
  Button,
} from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';

import Fieldset from '../../components/Fieldset';
import BasicInformation from './components/BasicInformation';
import AchievementSection from './components/AchievementSection';

const AthleteContainer = () => {
  const [formData, setFormData] = useState(null);
  const { id } = useParams();
  const history = useHistory();
  const isAddMode = !id;
  const alert = useAlert();

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      axios.get(`http://localhost:3001/api/athlete/${id}`)
        .then((res) => {
          setFormData(res?.data);
        });
    }
  }, [id, isAddMode]);

  const initialValues = formData || {
    firstNames: '', nickName: '', lastName: '', yearOfBirth: '', weight: '', linkToImage: '', species: [], achievements: [],
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const parsed = { ...values, yearOfBirth: new Date(values.yearOfBirth).getFullYear(), weight: values.weight === '' ? null : values.weight };
    if (isAddMode) {
      axios.post('http://localhost:3001/api/athlete', parsed)
        .then(() => {
          alert.success('Lisääminen onnistui');
          resetForm({});
          history.push('/athlete');
        })
        .catch(() => alert.error('Jokin meni nyt vikaan, lisääminen epäonnistui'));
      setSubmitting(false);
    } else {
      axios.put(`http://localhost:3001/api/athlete/${values.id}`, parsed)
        .then(() => {
          alert.success('Tietojen muokkaus onnistui');
          history.push('/athlete');
        })
        .catch(() => alert.error('Jokin meni nyt vikaan, tietojen päivittäminen epäonnistui'));
      setSubmitting(false);
    }
  };

  const getHeader = () => (
    isAddMode ? <h2>Lisää uusi urhelija</h2>
      : <h2>{`Muokkaa urheilijan ${formData?.nickName} ${formData?.lastName} tietoja`}</h2>

  );

  const getActions = (isSubmitting, resetForm) => {
    if (isAddMode) {
      return (
        <>
          <Button type="submit" color="primary" className="mr-2" disabled={isSubmitting}>Tallenna</Button>
          <Button
            type="button"
            color="warning"
            disabled={isSubmitting}
            onClick={() => {
              resetForm({});
              history.push('/athlete');
            }}
          >
            Peruuta ja tyhjennä lomake
          </Button>
        </>
      );
    }

    return (
      <>
        <Button type="submit" className="mr-2" color="primary" disabled={isSubmitting}>Tallenna</Button>
        <Button type="button" color="warning" disabled={isSubmitting} onClick={() => history.push('/athlete')}>Peruuta</Button>
      </>
    );
  };

  return (
    <>
      {getHeader()}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <BasicInformation />
            <AchievementSection />
            <Fieldset title="Toiminnot">
              <div className="d-flex pt-3">{getActions(isSubmitting, resetForm)}</div>
            </Fieldset>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AthleteContainer;
