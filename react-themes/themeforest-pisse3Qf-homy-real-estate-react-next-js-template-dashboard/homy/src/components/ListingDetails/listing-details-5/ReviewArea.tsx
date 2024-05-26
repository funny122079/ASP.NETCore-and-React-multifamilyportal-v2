import Review from "@/components/inner-pages/agency/agency-details/Review";
import NiceSelect from "@/ui/NiceSelect";

const ReviewArea = () => {

    const selectHandler = (e: any) => { };
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseElevenA" aria-expanded="true" aria-controls="collapseElevenA">
                    Review about Glenridge
                </button>
            </h2>
            <div id="collapseElevenA" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div className="review-panel-one">
                        <div className="position-relative z-1">
                            <div className="d-flex justify-content-sm-end">
                                <NiceSelect className="nice-select rounded-0"
                                    options={[
                                        { value: "01", text: "Newest" },
                                        { value: "02", text: "Best Seller" },
                                        { value: "03", text: "Best Match" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                            </div>
                            <Review />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewArea;
