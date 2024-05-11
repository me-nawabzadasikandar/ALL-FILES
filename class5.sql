"INNER JOIN SQL"

SELECT ordertable.order_id,customertable.customer_name,customertable.customer_id
FROM ordertable
INNER JOIN customertable ON ordertable.customer_id=customertable.customer_id;