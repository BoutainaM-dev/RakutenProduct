# Rakuten Frontend Internship Test Answers

### Question 1: 

The correct output is:

4. A C B

Explanation:
 Console.log("A") statement is executed first and logs "A", then console.log("B") is set to be executed 1 second later. Meanwhile, console.log("C"); gets executed immediately so "b" is logged before "C".

 ### Question 2: 

 The correct answer is :

 3. Your counter is: 5

Explanation:
  In the initial render, count is initialized to 10. useEffect runs once, updating count to 5.
During the re-render: React re-renders the component, and the updated value of count (5) is displayed.
