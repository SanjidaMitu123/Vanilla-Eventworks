

const Review = () => {
    return (
        <div>
            <h1 className="text-5xl text-center mt-7 text-cyan-500 ">Reviews</h1>
            <div className="grid grid-cols-2 gap-7 m-10 ml-60">
            <div className="card w-96 bg-base-100 shadow-xl ml-[70px]">
  <div className="card-body">
    <h2 className="card-title">Review</h2>
    <figure><img src="/public/review 1.PNG" alt="Shoes" /></figure>
  </div>
  
</div>

<div className="card w-96 bg-base-100 shadow-xl mr-[200px] ml-[-70px]">
  <div className="card-body">
    <h2 className="card-title">Review</h2>
    <figure><img src="/public/review2.PNG" alt="Shoes" /></figure>
  </div>
 
</div>

<div className="card w-96 bg-base-100 shadow-xl ml-[70px]">
  <div className="card-body">
    <h2 className="card-title">Review</h2>
    <figure><img src="/public/review3.PNG" alt="Shoes" /></figure>
  </div>
  
</div>

<div className="card w-96 bg-base-100 mr-[200px] ml-[-70px] shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Review</h2>
    <figure><img src="/public/review4.PNG" alt="Shoes" /></figure>
  </div>

</div>





            </div>
            
        </div>
    );
};

export default Review;