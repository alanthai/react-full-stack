import React from 'react';

const reviewees = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Doe' },
  { id: '3', name: 'Joe Doe' },
  { id: '4', name: 'Mac Doe' },
];

export const PerformanceReviewsTodo = () => (
  <performance-reviews-todo>
    Performance Reviews

    <ol>
    {
      reviewees.map(reviewee =>
       <li key={reviewee.id}>{ reviewee.name }</li>)
    }
    {/* onClick route to performance review form */}
    </ol>
  </performance-reviews-todo>
);
