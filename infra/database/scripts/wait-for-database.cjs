const { exec } = require('node:child_process') // Com este módulo é possível inicializar processo filhos a partir do processo atual do node.js
function checkPostgres() {
  exec('docker exec nucontrole-dev pg_isready --host localhost', handleReturn)
  function handleReturn(error, stdout) {
    if (error) {
      process.stdout.write('\n❌ Postgres is not ready! \n' + error + '\n')
      process.exit(1)
    }
    if (stdout.search('accepting connections') === -1) {
      process.stdout.write('.')
      checkPostgres()
      return
    }

    process.stdout.write('\n✅ Postgres is ready! \n')
  }
}
process.stdout.write('\n⌛ Waiting for Postgres to be ready \n')
checkPostgres()
