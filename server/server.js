const express = require('express'); // Corrected

const app = express();
const port = 3001;


app.use('/login', userRouter)
app.use('/login', carRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
