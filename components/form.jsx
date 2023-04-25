form.jsx
function TodoForm({addTodo}){
  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);const newTools = [...todos, {text:value, iscompleted: false}];
    setTodos(newTools);
    setValue('');
  }
return (
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    className="input"
    value={value}
    placeholder="add Todo ..."
    onChange= {e => setValue(e.target.value)}
    />
  </form>
);

}