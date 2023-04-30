import css from './form.css';

const Form = ({
  name,
  email,
  age,
  handleSubmit,
  handleInputChange,
  button,
}) => {
  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              className="form_input"
              value={name}
              onChange={handleInputChange}
              placeholder="name"
              type="text"
              name="name"
              required
              minLength="3"
              maxLength="30"
            />
          </label>
          <label>
            <input
              className="form_input"
              value={email}
              onChange={handleInputChange}
              placeholder="email"
              type="email"
              name="email"
              minLength="5"
              maxLength="30"
              required
            />
          </label>
          <label>
            <input
              className="form_input"
              value={age}
              onChange={handleInputChange}
              placeholder="age"
              type="text"
              name="age"
              minLength="2"
              maxLength="3"
              // pattern="/[^0-9\.]/g, ''"
              required
            />
          </label>

          <button className="form_button" onClick={handleSubmit} type="submit">
            {button}
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
