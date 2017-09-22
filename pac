function FindProxyForURL(url, host) {

if (isInNet(host, "63.241.250.0", "255.255.255.0"))
	return "PROXY 35.197.149.165:25";
 
// If the hostname matches, send direct.
    if (shExpMatch(host, "(*.raz-kids.com)") ||
	shExpMatch(host, "(*.kidsa-z.com)"))
        return "PROXY 35.197.149.165:25";
    if (shExpMatch(host, "(*.mathletics.com)") ||
        shExpMatch(host, "(*.cloudapp.net)"))
        return "PROXY 35.197.149.165:25";
    return "DIRECT";
 
}
