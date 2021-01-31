import * as React from 'react';

export default function CardLayout(props) {
    return (
        <div className="row mtop_1">
            <div className="card" style={{position: `relative`}}>
                <img src='/college_02.jpg' alt="CollegeAvatar" className="image_style" />
                <div className="container" style={{position: `absolute`, top: `-30px`, width: `100%`}}>
                    <div></div>
                    <div>
                        { props.val.promoted ? 
                            <p className="promoted_style">PROMOTED</p>
                            :
                            null
                        }
                        <div className="rating_box" style={{marginRight: `1rem`}}>
                            <p><span className="rate_num_style">{props.val.rating}</span>/5</p>
                            <p>{props.val.rating_remarks}</p>
                        </div>
                    </div>
                </div>
                <div className="container" style={{position: `absolute`, bottom: `160px`, left: `12px`, width: `100%`}}>
                    <div className="row">
                        {props.val.tags.map((key,ind) => {
                            return <p className="tag_style">{key}</p>
                        })}
                    </div>
                    <p className="ranking_style"># {props.val.ranking}</p>
                </div>
                <div className="container">
                    <div>
                        <div className="row" style={{alignItems: `center`}}>
                            <p className="margin_1">
                                <b className="title_style">{props.val.college_name}</b>
                            </p>
                            <p className="margin_1">
                                <span>&#9734;</span>
                                <span>&#9734;</span>
                                <span>&#9734;</span>
                                <span>&#9734;</span>
                            </p>
                        </div>
                        <p className="margin_1"><b className="nearest_style"><span>{props.val.nearest_place[0]}</span> <span style={{color: `#c2c2c2`}}>| {props.val.nearest_place[1]}</span></b></p>
                        <p className="famous_style margin_1"><span className="match_style">93% Match :</span> {props.val.famous_nearest_places}</p>
                        <p className="offer_style">{props.val.offertext}</p>
                    </div>
                    <div className="right_div_style">
                        <div>
                            <div className="row margin_1" style={{justifyContent: `flex-end`}}>
                                <p className="original_price_style" style={{textDecoration: `line-through`}}>&#8377;{props.val.original_fees.toLocaleString('en-IN')}</p>
                                <p className="discount_style">{props.val.discount}</p>
                            </div>
                            <p className="final_price_style">&#8377;{props.val.discounted_fees.toLocaleString('en-IN')}</p>
                            <p className="fees_cycle_style">{props.val.fees_cycle}</p>
                        </div>
                        <p style={{marginTop: `0px`, marginRight: `1.5rem`}}>{props.val.amenties[0]} <span className="circle"></span> {props.val.amenties[1]}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}