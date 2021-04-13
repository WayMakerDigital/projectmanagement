import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <p className="display-5">Kanban Board</p>
      </div>

      <div className="row">
        <span className="text-muted mb-3">Your boards</span>
        <Link
          to="/board/123456789"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <div className="col-lg-2">
            <div className="card border-0 shadow">
              <div className="card-body">Main Board</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
