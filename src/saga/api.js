// Create fetch API function
export default function apiCall(url, method) {
  // error
  let error;

  // Request data
  let requestData = {
    method: method,
    headers: {
      "Content-Type":  "application/json"
    }
  };

  return (
    fetch(url, requestData)
      .then(response => {
        switch (response.status) {
          case 400:
            error = 400;
            break;
          default:
            break;
        }
        return response.json()
      })
      .then(res => {
        switch (error) {
          case 400:
            let message = 'error 400';
            const error_400 = { message };
            throw error_400;
          default:
            return res;
        }
      })
  )
};