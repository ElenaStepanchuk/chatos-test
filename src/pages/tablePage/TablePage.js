// import Prices from '../../components/prices/Prices';
import { Container, Table, Form, Modal } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const TablePrices = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [updateName, setUpdateName] = useState(null);
  const [updateEmail, setUpdateEmail] = useState(null);
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');

  // const [open, setOpen] = useState(false);
  const button = 'Add user';

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
      const user = { id, name, email, age };
      setUsers([...users, user]);
    }
    return;
  };
  const handleSubmit = event => {
    event.preventDefault();
    formSubmitHandler(name, email, age);
    reset();
  };
  const removeUser = userId => {
    setUsers(users.filter(user => userId !== user.id));
  };
  const updateUserName = id => {
    setUpdateName(id);
    const user = users.filter(user => id === user.id);
    setValueName(user[0].name);
    console.log(valueName);
  };
  const updateUserEmail = id => {
    setUpdateEmail(id);
    const user = users.filter(user => id === user.id);
    setValueEmail(user[0].email);
    console.log(valueEmail);
  };

  const changeTextName = event => {
    // const handleShowMenu = () => setOpen(isOpen => !isOpen);
    setValueName(event.target.value);
    console.log(valueName);
  };
  const changeTextEmail = event => {
    setValueEmail(event.target.value);
    console.log(valueEmail);
  };
  const reset = () => {
    setName('');
    setEmail('');
    setAge('');
  };
  const saveUser = id => {
    setUsers(
      [...users].map(user => {
        if (user.id === id && valueName) {
          user.name = valueName;
        } else if (user.id === id && valueEmail) {
          user.email = valueEmail;
        }
        return user;
      })
    );
    setUpdateName(null);
    setUpdateEmail(null);
    setValueName('');
  };

  return (
    <Container>
      <div>
        <Form
          name={name}
          email={email}
          age={age}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          button={button}
        />
        <div className="table_user__container">
          <Table
            users={users}
            removeUser={removeUser}
            updateUserName={updateUserName}
            updateUserEmail={updateUserEmail}
            updateName={updateName}
            updateEmail={updateEmail}
            handleChangeTextName={changeTextName}
            handleChangeTextEmail={changeTextEmail}
            valueName={valueName}
            valueEmail={valueEmail}
            saveUser={saveUser}
          />
        </div>
      </div>
      {/* {open && <Modal />} */}
    </Container>
  );
};
export default TablePrices;
