## [LeetCode Problem] - NAME OF PROBLEM

### 1. **Issue Description**:
- **Goal**: Solve the "NAME OF PROBLEM" problem on LeetCode.
- **Details**: Solve the problem using an efficient algorithm (O(n) time complexity). Focus on understanding KEY CONCEPT for solving this problem efficiently.

---

### 2. **Progress Status**:
- **Status**: PROGRESS STATUS
- **Completion Date**: XXXXX

---

### 3. **Solution or Approach**:
**Steps Taken**:
**Example**
1. Defined the problem: Given an array of integers, return indices of the two numbers that add up to a specific target.
2. Chose the HashMap solution for efficient lookups.
3. Iterated through the array, checking if the complement exists in the map.

**Code**:
```javascript example
def two_sum(nums, target):
    hash_map = {}  # Create an empty hash map to store numbers and their indices
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]  # Return indices of the two numbers
        hash_map[num] = i  # Store the index of the current number
