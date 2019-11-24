var sql =
  'INSERT INTO users (user_name,first_name,last_name,password, email_id) VALUES ?'
var values = [['demian', 'demian', 'demian', '12345', 'demian@gmail.com']]

db.query(sql, [values], function (err) {
  if (err) throw err
  db.end()
})

public class Solution {
    public void dfs(int[][] M, int[] visited, int i) {
        for (int j = 0; j < M.length; j++) {
            if (M[i][j] == 1 && visited[j] == 0) {
                visited[j] = 1;
                dfs(M, visited, j);
            }
        }
    }
    public int findCircleNum(int[][] M) {
        int[] visited = new int[M.length];
        int count = 0;
        for (int i = 0; i < M.length; i++) {
            if (visited[i] == 0) {
                dfs(M, visited, i);
                count++;
            }
        }
        return count;
    }
}
