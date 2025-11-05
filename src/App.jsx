import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { profiles as initialProfiles } from './data/profiles.js';

function ProfileCard({ id, name, likes, onLike }) {
  return (
    <Card className="mb-3 shadow-sm text-center">
      <Card.Body>
        <Card.Title className="h5 mb-2">{name}</Card.Title>
        <Card.Text className="mb-3">Likes: {likes}</Card.Text>
        <Button variant="primary" onClick={() => onLike(id)}>
          Like
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function App() {
  const [people, setPeople] = useState(initialProfiles);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleLike = (id) => {
    setPeople((prevPeople) =>
      prevPeople.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) {
      setError('Name is required.');
      return;
    }

    const exists = people.some(
      (p) => p.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (exists) {
      setError('This name already exists.');
      return;
    }

    const newProfile = {
      id: Date.now(),
      name: trimmed,
      likes: 0,
    };

    setPeople((prevPeople) => [...prevPeople, newProfile]);
    setName('');
    setError('');
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>

      {/* Add Profile Form */}
      <Form
        className="mb-4"
        noValidate
        onSubmit={handleSubmit}
      >
        <Row className="justify-content-center">
          <Col xs={10} md={6} lg={4}>
            <Form.Group controlId="profileName" className="d-flex">
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!error}
              />
              <Button
                variant="success"
                type="submit"
                className="ms-2"
              >
                Add
              </Button>
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Profiles List */}
      <Row xs={1} md={2} lg={3}>
        {people.map((p) => (
          <Col key={p.id}>
            <ProfileCard
              id={p.id}
              name={p.name}
              likes={p.likes}
              onLike={handleLike}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
