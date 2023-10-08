


const Review = () => {
    return (
        <div>
            <h1 className="text-5xl text-center mt-7 text-cyan-500 ">Reviews</h1>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-7 m-10 lg:ml-60">
            <div className="card w-96 bg-base-100 shadow-xl lg:ml-[70px]">
  <div className="card-body">
    <h2 className="card-title">Review</h2>
    <figure><img src="/public/review 1.PNG" alt="Shoes" /></figure>
  </div>
  
</div>

<div className="card w-96 bg-base-100 shadow-xl lg:mr-[200px] lg:ml-[-70px]">
  <div className="card-body">
    <h2 className="card-title">Review</h2>
    <figure><img src="/public/review2.PNG" alt="Shoes" /></figure>
  </div>
 
</div>

<div className="card lg:w-96 sm:w-[30px] bg-base-100 shadow-xl lg:ml-[70px]">
  <div className="card-body">
    <h2 className="card-title">Review</h2>
    <figure><img src="/public/review3.PNG" alt="Shoes" /></figure>
  </div>
  
</div>

<div className="card w-96 bg-base-100 lg:mr-[200px] lg:ml-[-70px] shadow-xl">
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