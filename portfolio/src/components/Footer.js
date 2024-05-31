import "../assets/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-danger d-flex justify-content-center align-items-center">
      <div className="text-center text-white">
        &copy; {new Date().getFullYear()} Matthew Wilford.
      </div>
    </footer>
  );
}
