function FindProxyForURL(url, host) {
	if (isInNet(host, "63.241.250.0", "255.255.255.0"))
		return "PROXY 35.201.158.34:25";
		
	if (shExpMatch(host, "(*.cloudfront.net)") ||
        shExpMatch(host, "(*.cloudapp.net)"))
        return "PROXY 35.201.158.34:25";
		
    if (shExpMatch(host, "(*.raz-kids.com)") ||
		shExpMatch(host, "(*.kidsa-z.com)"))
        return "PROXY 35.201.158.34:25";
		
    if (shExpMatch(host, "(*.mathletics.com)") ||
        shExpMatch(host, "(*.cloudapp.net)"))
        return "PROXY 35.201.158.34:25";
		
	if (shExpMatch(host, "(*.readingeggs.com)") ||
        shExpMatch(host, "(*.readingeggspress.com.au)"))
        return "PROXY 35.201.158.34:25";	
		
	if (shExpMatch(host, "(*.starfall.com)") ||
		shExpMatch(host, "(*.pancil.com)"))
        return "PROXY 35.201.158.34:25";	
		
    return "DIRECT";
 
}
