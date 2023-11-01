import React, { useState,createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const [selectedContent, setSelectedContent] = useState("Todo");
  const handleContentChange = (event) => {
    setSelectedContent(event.target.value);
  };
    //for form data registration
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        color: 'red',
        isLogin:false,
        errors:{name:"",email:"",phone:""}
    });

    const errorEmail = (email) => {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return emailRegex.test(email) || email == "";
     };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const errname =name =="name" ? value==""? "Name is required!" : value.length<=4 ? "Name must include at least 4 char":"":"";
        const erremail =name=="email"? value==""?"Email is required":!errorEmail(value)?"Email format is not valid":"":"";
        const errphone =name=="phone"? value==""? "Phone is required!" : value.length<=6 ? "Phone must include at least 6 char":"":"";
        setFormData({ ...formData, [name]: value,errors:{name:errname,email:erremail,phone:errphone}});
        
    };
    const handleFormData =(name,email,phone)=>{
        const errname =name==""? "Name is required!" : name.length<=4 ? "Name must include at least 4 char":"";
        const erremail =email==""?"Email is required":!errorEmail(email)?"Email format is not valid":"";
        const errphone =phone==""? "Phone is required!" : phone.length<=6 ? "Phone must include at least 6 char":"";
        setFormData({ ...formData,errors:{name:errname,email:erremail,phone:errphone}});
        return errname==""&&erremail==""&&errphone=="";
    }

    const handleColorChange = (e) => {
        setFormData({ ...formData, color: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { name, email, phone, color,isLogin } = formData;
        if (handleFormData(name,email,phone)) {
            setFormData({...formData,isLogin:!formData.isLogin});
        } 
    };
    //
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [todoText, setTodoText] = useState("");

    const handleSearch = (event) => {
        setTodoText(event.target.value);
        setSearchTerm(event.target.value);
      };
    
      const handleAddTodo = () => {
        if (todoText.trim() !== "") {
          setTodos([...todos, { id: new Date().toISOString(), text: todoText ,checked:false}]);
          setTodoText("");
          setSearchTerm("");
        }
        
      };
    
      const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      };
      const updateCheckedStatus = (id) => {
        const dataIndex = todos.findIndex(item => item.id === id);
        if (dataIndex !== -1) {
          // Create a new array with the updated object at the specific index
          
          setTodos(prevData => [
            ...prevData.slice(0, dataIndex),
            { ...prevData[dataIndex], checked: !prevData[dataIndex].checked },
            ...prevData.slice(dataIndex + 1)
          ]);
          console.log(todos)
        }
      };
      
    const contextValues = {
      isDarkTheme,
      toggleTheme,
      selectedContent,
      setSelectedContent,
      todos,
      handleSearch,
      handleAddTodo,
      handleDeleteTodo,
      updateCheckedStatus,
      searchTerm,
      todoText,//
      formData,
      setFormData,
      handleInputChange,
      handleColorChange,
      handleSubmit,
      // ... other values
    };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
