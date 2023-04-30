import css from './table.css';

const Table = ({
  updateName,
  updateEmail,
  users,
  removeUser,
  updateUserName,
  updateUserEmail,
  handleChangeTextName,
  handleChangeTextEmail,
  valueName,
  valueEmail,
  saveUser,
}) => {
  return (
    <div className="table_page__container">
      <div className="table_title__container">
        <h2 className="table_title">Add new user</h2>
      </div>
      <div className="container_table">
        <div>
          <button className="sort_button">ASC sorting</button>
          <button className="sort_button">DESC sorting</button>
        </div>
        <div className="table_user__container">
          <div className="table_container">
            <table className="table">
              <caption className="table_second__title">Users table</caption>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Delete</th>
                  {/* <th>Update</th> */}
                </tr>
              </thead>
              {users.map(user => (
                <tbody key={user.id}>
                  <tr>
                    <td>{user.id}</td>
                    {updateName === user.id ? (
                      <>
                        <input
                          onChange={handleChangeTextName}
                          value={valueName}
                        />
                        <button type="button" onClick={() => saveUser(user.id)}>
                          Ok
                        </button>
                      </>
                    ) : (
                      <td>
                        {user.name}
                        <form>
                          <button
                            className="table_button"
                            type="button"
                            onClick={() => updateUserName(user.id)}
                          >
                            Update
                          </button>
                        </form>
                      </td>
                    )}
                    {updateEmail === user.id ? (
                      <>
                        <input
                          onChange={handleChangeTextEmail}
                          value={valueEmail}
                        />
                        <button type="button" onClick={() => saveUser(user.id)}>
                          Ok
                        </button>
                      </>
                    ) : (
                      <td>
                        {user.email}
                        <form>
                          <button
                            className="table_button"
                            type="button"
                            onClick={() => updateUserEmail(user.id)}
                          >
                            Update
                          </button>
                        </form>
                      </td>
                    )}
                    <td>{user.age}</td>
                    <td>
                      <form>
                        <button
                          className="table_button"
                          type="button"
                          onClick={() => removeUser(user.id)}
                        >
                          Delete
                        </button>
                      </form>
                    </td>
                    {/* <td>
                      <form>
                        <button
                          className="table_button"
                          type="button"
                          onClick={() => updateUser(user.id)}
                        >
                          Update
                        </button>
                      </form>
                    </td> */}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
