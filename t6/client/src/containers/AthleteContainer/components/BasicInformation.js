import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Field, useFormikContext,
} from 'formik';
import {
  FormGroup, Label, Input, Row, Col,
} from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from '../../../components/DatePicker';
import Fieldset from '../../../components/Fieldset';

const BasicInformation = () => {
  const [species, setSpecies] = useState([]);
  const { setFieldValue, values } = useFormikContext();

  useEffect(() => {
    axios.get('https://fi.wikipedia.org/w/api.php?action=parse&format=json&prop=links&page=Luettelo_urheilulajeista').then((res) => {
      const items = res?.data?.parse?.links;
      setSpecies(items.map((i) => i?.['*']));
    });
  }, []);

  return (
    <Fieldset title="Perustiedot">
      <Row form>
        <Col md={8}>
          <FormGroup>
            <Label for="firstNames">Etunimet</Label>
            <Input tag={Field} id="firstName" name="firstNames" type="text" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="nickName">Kutsumanimi</Label>
            <Input tag={Field} id="nickName" name="nickName" type="text" />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={8}>
          <FormGroup>
            <Label for="lastName">Sukunimi</Label>
            <Input tag={Field} id="lastName" name="lastName" type="text" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="yearOfBirth">Syntymävuosi</Label>
            <Field
              id="yearOfBirth"
              name="yearOfBirth"
              className="form-control"
              selected={(values.yearOfBirth && new Date(values.yearOfBirth.toString())) || null}
              onChange={(date) => setFieldValue('yearOfBirth', date)}
              showYearPicker
              dateFormat="yyyy"
              component={DatePicker}
            />
          </FormGroup>
        </Col>
      </Row>
      <hr />
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="weight">Paino</Label>
            <Input tag={Field} id="weight" name="weight" type="number" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="linkToImage">Linkki kuvaan</Label>
            <Input tag={Field} id="linkToImage" name="linkToImage" type="url" />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col>
          <FormGroup>
            <Label for="species">Laji</Label>
            <Field
              multiple
              id="species"
              name="species"
              onChange={(selected) => {
                setFieldValue('species', selected);
              }}
              options={species}
              clearButton
              allowNew
              selected={values.species}
              component={Typeahead}
            />
          </FormGroup>
        </Col>
      </Row>
    </Fieldset>
  );
};

export default BasicInformation;
