import { Link } from "react-router-dom";
import { Container } from "../../assets/styles/Container";
import Loading from "../../components/Loading";
import useRandomStudent from "../../hooks/api/useRandomStudent";

export default function Home() {

  const { loadingGettingRandomStudent, errorGettingRandomStudent, randomStudent, listRandomStudent } = useRandomStudent();


  if (errorGettingRandomStudent) return (<h1>Não foi possível realizar o sorteio!</h1>);

  if ((loadingGettingRandomStudent && !randomStudent)) {
    return (
      <Container>
        <Loading />
      </Container>);
  }

  return (
    <>
      {!randomStudent ?
        <Container>
          <h1>Xablau! Não há estudantes cadastrados para o sorteio!</h1>
        </Container> :
        <Container>
          <button onClick={() => listRandomStudent()}>
            Selecionar Aluno aleatóriamente
          </button>
          <h1>{randomStudent.name} </h1>
          <Link to='/students'>
            Ver toda a lista de estudantes
          </Link>
        </Container>}
    </>

  )

}
