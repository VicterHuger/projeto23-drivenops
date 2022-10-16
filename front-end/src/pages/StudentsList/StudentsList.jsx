import { Link } from "react-router-dom";
import { Container } from "../../assets/styles/Container";
import Loading from "../../components/Loading";
import useStudents from "../../hooks/api/useStudents";

export default function StudentsList() {
    const { loadingGettingStudents, errorGettingStudents, listStudents, students } = useStudents();

    if (errorGettingStudents) return (
        <Container>
            <h1>Não foi possível carregar os estudantes!</h1>
        </Container>
    )

    return (
        <>

            {
                loadingGettingStudents || !students ?
                    <Container>
                        < Loading />
                    </Container >
                    :
                    <Container>
                        <Link to='/'>
                            Voltar para Home
                        </Link>
                        {students.map(student => {
                            return (<h1 key={student.id}>{student.name}</h1>)

                        })}
                        < button onClick={() => listStudents()} >
                            Recarregar estudantes
                        </button>

                    </Container>
            }


        </>
    );
}

