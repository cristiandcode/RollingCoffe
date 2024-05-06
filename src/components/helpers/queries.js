const userAdmin= {
    email: 'admin@rollingcoffee.com',
    password: '123Aa123'
}

export const login = (usuario)=>{
    if(usuario.email === userAdmin.email && usuario.password === userAdmin.password){
        sessionStorage.setItem('usuarioRollingCoffee', JSON.stringify(userAdmin.email))
        return true
    }else{
        return false
    }
}