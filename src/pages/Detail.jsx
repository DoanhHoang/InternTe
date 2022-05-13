import Modal from "../components/Modal/Modal";
import "../assets/styles/Detail.scss";
const Detail = () => {
  return (
    <div>
<a className="dialog-btn" href="#my-dialog">Show Modal!</a>
          <div className="dialog overlay" id="my-dialog">
            <a href="#" class="overlay-close"></a>
            <div className="dialog-body">
                <a className="dialog-close-btn" href="#">&times;</a>
                <Modal/>
            </div>
        </div>
    </div>
  );
};
export default Detail;