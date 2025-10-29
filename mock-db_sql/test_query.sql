SELECT
    m.item_id,
    m.name,
    SUM(oi.quantity) AS total_ordered
FROM orderitems oi
JOIN menuitems m ON oi.item_id = m.item_id
GROUP BY
    m.item_id, m.name
ORDER BY
    total_ordered DESC
;