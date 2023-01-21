import Link from "next/link"

const NotFound: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", margin: "10vh 0 0 0", textAlign: "center" }} >
        <h1 style={{ fontSize: "2rem" }} >Opss, Se perdeu?</h1>
        <Link href={"/"} style={{ textDecoration: "underline", color: "var(--secondary)" }} >Voltar</Link>
      </div>
    </>
  )
}

export default NotFound