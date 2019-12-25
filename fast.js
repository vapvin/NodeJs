'use strict'

const dns = require('dns')

dns.lookup('archive.org', (err, adress, family) => {
    console.log(`address: ${adress}, ${family}`)
})

dns.resolve4('archive.org', (err, addresses) => {
    if(err) throw err

    const res = JSON.stringify(addresses)
    console.log(res)

    addresses.forEach(a => {
        dns.reverse(a, (err, hostnames) => {
            if(err) throw err

            console.log(`reverse for ${a}; ${JSON.stringify(hostnames)}`)
        })
    })
})