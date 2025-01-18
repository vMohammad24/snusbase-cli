# Snusbase CLI

A command-line interface for Snusbase API searches.

## Installation

```bash
npm install -g snusbase-cli
```

## Usage

```bash
snusbase <query> -t <type> -k <api_key> [-e <export_file>]
```

### Arguments

- `query`: The search term to query in Snusbase

### Required Options

- `-t, --type <type>`: The type of search to perform
- `-k, --key <key>`: Your Snusbase API key

### Optional Options

- `-e, --export <file>`: Export results to a JSON file
- `-V, --version`: Output version number
- `-h, --help`: Display help information

## Examples

```bash
# Basic search
snusbase example@email.com -t email -k YOUR_API_KEY

# Export results to file
snusbase example@email.com -t email -k YOUR_API_KEY -e results.json
```

## License

[MIT License](LICENSE)
