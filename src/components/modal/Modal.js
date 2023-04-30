import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './modal.css';
import { Form } from 'components';

const Modal = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(true);
  const button = 'Update user';

  const handleInputChange = ({ target: { name, value } }) => {
    // const handleShowMenu = () => setOpen(isOpen => !isOpen);

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'age':
        setAge(value);
        break;
      default:
        break;
    }
  };
  const formSubmitHandler = (name, email, age, id) => {
    if (name && email && age) {
      id = nanoid();
      // console.log(id, name, email, age);
      const user = { id, name, email, age };
      setUsers([...users, user]);
    }

    return;
  };
  const handleSubmit = event => {
    event.preventDefault();
    formSubmitHandler(name, email, age);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="backdrop">
          <div className="modal_container">
            <Form
              name={name}
              email={email}
              age={age}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              button={button}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
