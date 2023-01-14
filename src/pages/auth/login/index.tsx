import React from "react";
import { Avatar, Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import BackgroundLogin from "../../../images/hero_bg_1.jpg";
import Logo from "../../../images/LogoBidCargo.png";


type LoginType = {
    username: string;
    password: string;
};
export const LoginPage: React.FC<{}> = () => {
    const [loginData, setLoginData] = React.useState<LoginType>({
        username: "",
        password: "",
    });

    const dataLogin =(e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(loginData);
    };

 
    return (
        <>
            <Grid container style={{minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img alt='Logo Bigcargo' src={process.env.PUBLIC_URL + BackgroundLogin} style={{width: '100%', height: '100%', objectFit:'cover'}} />
                </Grid>

                <Grid container item xs={12} sm={6} 
                alignItems='center' 
                direction='column'
                justifyContent='space-between'
                sx={{ padding: 10 }}>
                    
                    <div>
                        <Grid container alignItems='center'justifyContent='center'>
                            <img alt='Logo Bigcargo' src={process.env.PUBLIC_URL + Logo} />
                        </Grid>

                        <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
                            <Box component='form' onSubmit={handleSubmit}>
                                <TextField
                                    name='username'
                                    margin='normal'
                                    fullWidth
                                    type='text'
                                    label='User/Email'
                                    sx={{ mt: 2, mb: 1.5 }}
                                    required
                                    onChange={dataLogin}
                                />

                                <TextField
                                    name='password'
                                    margin='normal'
                                    fullWidth
                                    type='password'
                                    label='Password'
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                    required
                                    onChange={dataLogin}
                                />

                                <Button
                                    fullWidth
                                    type='submit'
                                    variant='contained'
                                    sx={{ mt: 1.5, mb: 3 }}
                                >
                                    Iniciar sesion
                                </Button>
                            </Box>
                        </Paper>
                    </div>
                </Grid>

            </Grid>
        </>
       /* <Box sx={{ backgroundImage: `url(${process.env.PUBLIC_URL + BackgroundLogin})`, color: 'white', bg: 'gray', }}>
            <Container maxWidth='sm' >
                <Grid container
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    sx={{ minHeight: '100vh' }}
                >

                    <Grid item>
                        <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
                            
                            <img alt='Logo Bigcargo' src={process.env.PUBLIC_URL + Logo} />
                            <Box component='form' onSubmit={handleSubmit}>
                                <TextField
                                    name='username'
                                    margin='normal'
                                    fullWidth
                                    type='text'
                                    label='User/Email'
                                    sx={{ mt: 2, mb: 1.5 }}
                                    required
                                    onChange={dataLogin}
                                />

                                <TextField
                                    name='password'
                                    margin='normal'
                                    fullWidth
                                    type='password'
                                    label='Password'
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                    required
                                    onChange={dataLogin}
                                />

                                <Button
                                    fullWidth
                                    type='submit'
                                    variant='contained'
                                    sx={{ mt: 1.5, mb: 3 }}
                                >
                                    Iniciar sesion
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        */

    );
};