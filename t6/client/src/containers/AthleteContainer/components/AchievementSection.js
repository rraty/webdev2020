import React, { useState } from 'react';
import {
  Field,
  useField, FieldArray, useFormikContext, getIn,
} from 'formik';
import {
  Button, FormGroup, Label, Input, Col, ListGroup, ListGroupItem, Badge, Row as RSRow,
} from 'reactstrap';
import DatePicker from '../../../components/DatePicker';
import Fieldset from '../../../components/Fieldset';

const Row = ({
  // eslint-disable-next-line react/prop-types
  index, handleRemove, open,
}) => {
  const [contentEditable, setContentEditable] = useState(open || false);
  const { setFieldValue } = useFormikContext();
  const [field] = useField(`achievements[${index}]`);

  if (contentEditable) {
    return (
      <>
        <RSRow form>
          <Col md={8}>
            <FormGroup>
              <Label for="titleOfAchievement">Nimi</Label>
              <Input tag={Field} id="titleOfAchievement" name={`achievements[${index}].name`} type="text" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="yearOfAchievement">Vuosi</Label>
              <Field
                id="yearOfAchievement"
                // name={field.name}
                name={`achievements[${index}].year`}
                selected={(field.value.year && new Date(field.value.year)) || null}
                onChange={(date) => setFieldValue(`achievements[${index}].year`, date)}
                showYearPicker
                dateFormat="yyyy"
                component={DatePicker}
              />
            </FormGroup>
          </Col>
        </RSRow>
        <RSRow form>
          <Col>
            <FormGroup>
              <Label for="additionalInformationOfAchievement">Lisätietoa</Label>
              <Input tag={Field} id="informationAboutAchievement" name={`achievements[${index}].additionalInformation`} type="text" />
            </FormGroup>
          </Col>
        </RSRow>
        <Button type="button" color="primary" onClick={() => setContentEditable(!contentEditable)}>Sulje</Button>
        <Button type="button" color="danger" onClick={handleRemove}>Poista</Button>
      </>
    );
  }
  return (
    <ListGroupItem className="d-flex justify-content-between">

      <p className="p-0 m-0 flex-grow-1">
        <Badge pill>{new Date(field.value.year).getFullYear()}</Badge>
        <strong>{field?.value?.name}</strong>
        {`: ${field?.value?.additionalInformation}`}
      </p>
      <span className="pull-right">
        <Button type="button" color="primary" onClick={() => setContentEditable(!contentEditable)}>Muokkaa</Button>
        <Button type="button" color="danger" className="ml-2" onClick={handleRemove}>Poista</Button>
      </span>

    </ListGroupItem>
  );
};

const AchievementSection = () => {
  const { values } = useFormikContext();
  const achievements = getIn(values, 'achievements');

  return (
    <Fieldset title="Saavutukset">
      <h5>Saavutukset:</h5>
      <ListGroup>
        <FieldArray
          name="achievements"
          render={(arrayHelpers) => (
            <>
              <div className="mb-3">
                {achievements?.map((item, index) => (
                  <Row
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    index={index}
                    handleRemove={() => arrayHelpers.remove(index)}
                    open={(item.year && item.name && item.additionalInformation) === ''}
                  />
                ))}
              </div>
              <Button
                type="button"
                color="primary"
                onClick={() => arrayHelpers.push({
                  year: '', name: '', additionalInformation: '',
                })}
              >
                Lisää uusi saavutus
              </Button>
            </>
          )}
        />
      </ListGroup>
    </Fieldset>
  );
};

export default AchievementSection;
