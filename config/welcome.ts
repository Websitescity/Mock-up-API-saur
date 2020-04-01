const welcome = (port: number) =>{
console.clear();
return`\x1b[32m
               __
              / _)
     _/\\/\\/\\_/ /
   _|         /
 _|  (  | (  |
/__.-'|_|--|_|  Mock-up-api-saur is running on port \x1b[34m${port}
API requests:\x1b[0m
`;
 }
export default welcome;