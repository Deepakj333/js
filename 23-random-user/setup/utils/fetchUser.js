const URL = 'https://randomuser.me/api/';

const getUser = async ()=>{
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    const person = data.results[0];
    const { first ,last } = person.name;
    const { email, phone} = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { dob: {age} } = person;
    const {street:{number,name}} = person.location;
    
    return {
        first,
        last,
        email,
        phone,
        image,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
    };

};

export default getUser;