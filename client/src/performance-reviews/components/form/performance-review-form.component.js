import React from 'react';


export const PerformanceReviewForm = () => (
  <form>
    <p>
      <span><strong>Reviewee:</strong> { reviewee.name }</span>

    </p>

    <p>
      <label htmlFor="">
        Comments
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </label>
    </p>

    <button type="submit">Submit</button>
  </form>
);
