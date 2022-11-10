function ulSurround (strings) {
    let res = strings.map(str = <li>${str}</li> )
    res.unshift('</ul>');
    res.push('</ul>'); 
    return res;
}
