insert into heloUsers (username, password)
values ($1, $2)

returning id, username;