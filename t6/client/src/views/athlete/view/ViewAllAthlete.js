import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import {
  Table, Button,
} from 'reactstrap';

const ViewAllAthlete = () => {
  const [items, setItems] = useState([]);
  const alert = useAlert();
  const { push } = useHistory();

  useEffect(() => {
    axios.get('http://localhost:3001/api/athletes')
      .then((res) => setItems(res.data))
      .catch(() => alert.error('Tietojen lataaminen rajapinnasta epäonnistui'));
  }, [alert]);

  const handleDeletion = (athlete) => {
    axios.delete(`http://localhost:3001/api/athlete/${athlete.id}`)
      .then(() => {
        alert.success(`Henkilö ${athlete?.nickName} ${athlete?.lastName} poistettu onnistuneesti`);
        setItems(items.filter((i) => i !== athlete));
      })
      .catch(() => alert.error(`Henkilön ${athlete?.nickName} ${athlete?.lastName} poistaminen epäonnistui`));
  };

  return (
    <>
      <h3>Urheilijat</h3>
      <Button type="button" color="primary" className="ml-auto" onClick={() => push('/athlete/add')}>Lisää urheilija</Button>
      <hr />
      <Table bordered striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Etunimi</th>
            <th>Sukunimi</th>
            <th>Syntymävuosi</th>
            <th>Paino</th>
            <th>Kuva</th>
            <th>Laji(t)</th>
            <th>Saavutukset</th>
            <th>Toiminnot</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i?.id}>
              <th scope="row">{i?.id}</th>
              <td>{i?.nickName}</td>
              <td>{i?.lastName}</td>
              <td>{i?.yearOfBirth}</td>
              <td>{i?.weight}</td>
              <td>
                <img src={i?.linkToImage} alt="" height={100} width={100} />
              </td>
              <td>{i?.species?.join('; ')}</td>
              <td>{i?.achievements?.length}</td>
              <td className="d-flex">
                <Button type="button" color="primary" className="mr-2" onClick={() => push(`/athlete/${i?.id}`)}>Muokkaa</Button>
                <Button type="button" color="danger" onClick={() => handleDeletion(i)}>Poista</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ViewAllAthlete;
