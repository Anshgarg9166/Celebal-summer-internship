// Import the built-in 'dns' module for DNS operations
var dns = require('dns');

// This line is unrelated — not needed in this context
const { json } = require('stream/consumers');

// Perform DNS lookup for 'www.google.com'
// This gets the IP address associated with the domain
dns.lookup('www.google.com', function onLookup(err, address, family) {
    
    // Print the resolved IP address
    console.log('address : ' + address);

    // Perform reverse DNS lookup on the IP address
    // This tries to find the hostname(s) associated with the IP
    dns.reverse(address, function(err, hostnames) {
        
        // Handle errors in reverse lookup (e.g., no PTR record)
        if (err) {
            console.log(err.stack);
        }

        // Print the reverse lookup result (array of hostnames)
        console.log('reverse for ' + address + ' : ' + JSON.stringify(hostnames));
    });
});
