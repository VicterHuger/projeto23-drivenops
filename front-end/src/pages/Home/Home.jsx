import useRandomStudent from "../../hooks/api/useRandomStudent";

export default function Home() {

  const { loadingGettingRandomStudent, errorGettingRandomStudent, randomStudent } = useRandomStudent();


  if (errorGettingRandomStudent) return (<h1>Não foi possível realizar o sorteio!</h1>);

  if ((loadingGettingRandomStudent && !randomStudent)) {
    return (<h1>Carregando...</h1>);
  }

  return (
    <>
      {!randomStudent ? <h1>Xablau! Não há estudantes cadastrados para o sorteio!</h1> : <h1>{randomStudent.name} </h1>}
    </>

  )

}
