```bash
curl localhost:8081

curl -X POST -H 'Content-Type: application/json' -d '{
  "title": "How to make a sandwich?",
  "description": "I am trying very hard but I do not know how to make a delicious sandwich. Can someone help me?"
}' localhost:8081

curl -X POST -H 'Content-Type: application/json' -d '{
  "answer": "Just spread butter on the bread and that is it."
}' localhost:8081/answer/1
```
