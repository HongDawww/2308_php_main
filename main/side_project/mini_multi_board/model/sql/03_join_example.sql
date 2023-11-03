--  join
SELECT b.b_title, b.b_content
FROM user u
	JOIN board b
		ON u.id = b.u_pk
WHERE u.u_id = 'admin';