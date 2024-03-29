import React from "react";
import { Button, CircularProgress, Container, Grid, Pagination } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { HeaderComponent } from "../../components/Header";
import { characters } from "../../api/characters";
import { CardComponent } from "../../components";
import { TypeCharacter } from "./interface/character.interface";
import { Box } from "@mui/system";

export const HomePage: React.FC<{}> = () => {
    const { getError} = useNotification()
    const handleClick = () => {
        getError("Usuario o contraseña incorrectos");
    };
    const [page, setPage] = React.useState(1);
    const [count, setCount] = React.useState(1);
    
    const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(true);
        characters
            .getAll({ page })
            .then((r) => {
                setCount(r.data.info.pages);
                setAllCharacters(r.data.results);
                setTimeout(() => setLoading(false), 1000);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [page]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
   
    return (
        <Container maxWidth="xl" >
            <HeaderComponent
                title="Rick and Morty API"
                description="welcome to The Rick and Morty API"
                element={
                    <Button fullWidth variant="contained">
                        proximos episodios
                    </Button>
                }
            />
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <div>
                        {allCharacters!.length !== 0 ? (
                            <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                                {allCharacters!.map((character) => (
                                    <Grid item xs={3} key={character.id}>
                                        <CardComponent
                                            id={character.id}
                                            image={character.image}
                                            name={character.name}
                                            species={character.species}
                                            status={character.status}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            "No data"
                        )}
                    </div>
                    <Box
                        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
                    >
                        <Pagination 
                            variant="outlined"
                            color="primary"
                            count={count}
                            page={page}
                            onChange={handleChange}
                            sx={{ mb: 3 }}
                            size="large"
                        />
                    </Box>
                </>
            )}
        </Container>
    );
};