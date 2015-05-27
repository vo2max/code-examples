/*!
 * SQL Exercise
 *
 * Given the following SQL, this query will get the post id 
 * of the most recently modified post for each user. 
 *
 * CREATE TABLE [dbo].[posts](
 * 		[id] [int] IDENTITY(1,1) NOT NULL,
 * 		[user_id] [int] NOT NULL,
 * 		[date_posted] [datetime] NOT NULL,
 * 		[date_modified] [datetime] NOT NULL,
 * 		[content] [text] NOT NULL, 
 * 		CONSTRAINT [PK_posts] PRIMARY KEY CLUSTERED ( [id] ASC )
 * )
 */

SELECT [id] 
FROM (SELECT [id], 
			 [user_id], 
             ROW_NUMBER() OVER (PARTITION BY [user_id] ORDER BY [date_modified] DESC) AS [row]
      FROM [dbo].[posts]) AS [table]
WHERE [row] = 1